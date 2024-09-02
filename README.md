# 프리윌린 프론트엔드 채용 과제

### 🤖 기능

- 매쓰플랫의 문제리스트와 각 문제에 관련된 유사문제를 호출한 뒤 학습지 목록의 문제들을 유저가 원하는 대로 추가, 교체, 삭제할 수 있는 화면 작업.

<br />

### 📹 구현 영상

- [구현 영상 링크](https://youtu.be/Vullv8r3FnQ)
  - 용량이 커서 부득이하게 링크로 대체하였습니다.

<br />

### 🗄️ 파일 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂buttons
 ┃ ┃ ┣ 📜ActiveButton.tsx
 ┃ ┃ ┣ 📜AddButton.tsx
 ┃ ┃ ┣ 📜DeleteButton.tsx
 ┃ ┃ ┗ 📜SwapHorizButton.tsx
 ┃ ┣ 📂icons
 ┃ ┃ ┣ 📜AddCircleIcon.tsx
 ┃ ┃ ┣ 📜DeleteIcon.tsx
 ┃ ┃ ┗ 📜SwapHorizIcon.tsx
 ┃ ┣ 📂problemSection
 ┃ ┃ ┣ 📜ProblemContainer.tsx
 ┃ ┃ ┗ 📜ProblemList.tsx
 ┃ ┣ 📂similarProblemSection
 ┃ ┃ ┣ 📜SimilarProblemContainer.tsx
 ┃ ┃ ┗ 📜SimilarProblemList.tsx
 ┃ ┗ 📜Problem.tsx
 ┣ 📂pages
 ┃ ┗ 📜MainPage.tsx
 ┣ 📂services
 ┃ ┣ 📜problemApi.ts
 ┃ ┣ 📜problemMapper.ts
 ┃ ┗ 📜requestConfig.ts
 ┣ 📂store
 ┃ ┗ 📜useActiveData.ts
 ┣ 📂styles
 ┃ ┗ 📜theme.ts
 ┣ 📂utils
 ┃ ┗ 📜changeToKoreanUtils.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┗ 📜index.tsx
```

<br/>

### ❓ 주요 사용 라이브러리

1. **서버 상태 관리 라이브러리**

   - `React-query`: active 문제가 변경되는 경우 외에, 서버에서 한 번 호출한 문제 데이터를 가지고 최대한 추가 호출 없이 기능을 구현하고자 하였습니다. 따라서 서버 상태 관리 라이브러리를 사용하는 것이 적합하다는 생각이 들었습니다. `React-query` 를 사용하여 서버 상태 관리를 하였는데요. `npmTrands` 를 참고했을 때, `React-query` 의 사용 비율이 더 높고, 해당 라이브러리를 사용하면서 궁금한 부분이 있었어서 이참에 그 부분을 더 깊게 들어가서 공부해보는 것이 좋을 것 같아서 `React-query` 를 사용하였습니다.

2. **전역 상태 관리 라이브러리**

   - `zustand`: 제공하는 api가 간단하여 처음 스토어를 구성할 때 복잡한 보일러플레이트 코드를 피할 수 있다는 점이 좋았습니다. 또한 다른 상태 관리 라이브러리에 비해 학습에 소요되는 시간이 짧고, 가벼워서 `zustand`를 사용하였습니다.

3. **스타일**
   - `tailwind`: 유틸리티 클래스가 미리 정의되어있어, 특정 css 속성에 대한 스타일을 즉시 적용할 수 있다는 점에서 개발 속도가 향상된다는 점이 크게 다가왔습니다. 또한 클래스 이름이 꽤 직관적인 편이며, 기존에 사용하는 CSS의 속성명과 유사하다는 점에서 다른 사람도 쉽게 이해할 수 있다고 생각하여 `tailwind`를 사용하였습니다.

<br/>

### 💡 구현 방법

1. 문제 리스트를 react-query를 사용하여 데이터를 받아옵니다.
   - 문제 리스트의 Key = `["problemList"]`
   - 유사 문제 리스트의 Key = `["similarList"]`
2. 상세 기능 (유사문제 변경 / 삭제 / 교환 / 추가)는 캐시된 데이터 변경을 통해 UI를 변경합니다.
   - **유사문제 변경**
     - 문제 리스트에서 유사 문제 변경 버튼을 클릭하면 active 문제에 대한 유사 문제 데이터를 받아옵니다. 초기 기획은 active 문제가 변경되면 유사 문제 리스트가 변경되어야 하니, 유사 문제 리스트의 Key 값(["similarList"])에 active 문제의 정보(예를 들면 문제 id 같은)를 넣어서 active 문제가 변경되면 유사 문제 데이터가 자동으로 refecth 되도록 하였습니다. 그러나 **문제 교환인 경우에는 유사 문제 리스트를 새로 받아올 필요가 없어서, key 값에 변수를 두지 않고 active 문제가 변경될 경우에는 유사 문제 데이터를 invalidate 하여 새로 받아오도록** 하였습니다.
   - **삭제**
     - 문제 리스트에서 삭제를 클릭한 경우, 리스트 데이터에서 삭제를 원하는 데이터를 제거한 새로운 배열을 만들어 해당 배열로 캐시 데이터를 변경하였습니다.
   - **교환**
     - 교환하고자 하는 문제들의 인덱스를 참고하여 각 리스트의 캐시된 데이터에서 문제를 swap 하여 새로운 캐시 데이터를 세팅하였습니다.
   - **추가**
     - 유사 문제 리스트에서 문제 리스트로 추가를 원하는 문제는 유사 문제 리스트 캐시 데이터에서는 해당 데이터를 제외하고, 문제 리스트에서는 active 문제 위에 해당 문제를 추가한 데이터로 캐시 데이터를 변경해주었습니다.
     - 참고로, 구현사항에는 추가 문제를 active 문제 앞에 추가하라고 하였으나, 함께 첨부해주신 시연 영상에는 active 문제 뒤에 해당 문제가 추가되는 것으로 기능 구현이 되어있었습니다. 따라서 구현사항대로 구현하였습니다.

<br/>

### 💭 어려웠던 점 및 배운 점

- ⭐︎ useQuery 와 useQueryClient 의 차이

  - 해당 주제는 실무에서 useQuery를 사용하면서 [트러블 슈팅 내역](https://reliable-pepper-9f9.notion.site/useQuery-useQueryClient-a959f81495994311a7a941c7f010c392)에 기록해 둘 정도로 궁금해했던 주제였습니다. 이번에도 비슷한 문제를 겪었는데요. useQueryClient의 getQueryData 를 활용하면 캐시된 데이터가 변경되어도 ui가 변경되지 않는 문제가 발생하였습니다. 따라서 해당 문제에 대해서 깊게 알아보았습니다.
  - 문제가 발생하는 원인은 useQuery는 데이터를 subscribe 하고 있는 반면, useQueryClient의 getQueryData 는 단순하게 캐시에 있는 데이터를 가져오는 메서드이기 때문이었습니다. getQueryData 메서드는 데이터를 구독하지 않으므로, 데이터가 변경되더라도 자동으로 컴포넌트의 상태를 업데이트 하지 않는다는 것을 알게 되었습니다.

   <br />

  - **참고) react-query 오픈소스**

    1.  `useQueryClient`의 `getQueryData` ([참고 링크](https://github.com/TanStack/query/blob/8af72729f0457289e675816453ba9d2d2ed4f604/packages/query-core/src/queryClient.ts#L353))

    ```
      getQueryData<
        TQueryFnData = unknown,
        TTaggedQueryKey extends QueryKey = QueryKey,
        TInferredQueryFnData = TTaggedQueryKey extends DataTag<
        unknown,
        infer TaggedValue
      >
        ? TaggedValue
        : TQueryFnData,
    >(queryKey: TTaggedQueryKey): TInferredQueryFnData | undefined
    getQueryData(queryKey: QueryKey) {
      const options = this.defaultQueryOptions({ queryKey })
      return this.#queryCache.get(options.queryHash)?.state.data
    }
    ```

    - 위 코드에서 `getQueryData`는 `queryKey`에 해당하는 쿼리를 찾아서 그 쿼리의 현재 상태(`query.state.data`)를 반환할 뿐입니다. 이 과정에서 데이터가 변경되었는지를 감지하거나, 컴포넌트에 알리는 구독 메커니즘이 포함되어 있지 않습니다.

     <br />

    2. `useQuery` ([참고 링크](https://github.com/TanStack/query/blob/8af72729f0457289e675816453ba9d2d2ed4f604/packages/react-query/src/useQuery.ts))

    ```
      export function useQuery(options: UseQueryOptions, queryClient?: QueryClient) {
        return useBaseQuery(options, QueryObserver, queryClient)
      }
    ```

    - `useQuery`는 내부적으로 `QueryObserver`를 사용하여 데이터를 구독하고 상태가 변경될 때마다 컴포넌트를 업데이트합니다.
