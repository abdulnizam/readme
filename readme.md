Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.



context/LoaderContext/LoaderContext.tsx (20:32) @ LoaderContext

  18 |
  19 | export function useLoader(): LoaderContextProps {
> 20 |     const context = useContext(LoaderContext);
     |                                ^
  21 |     if (!context) {
  22 |       throw new Error('useLoader must be used within an App Provider');
  23 |     }
