### Conventional commits

- build (changes made affect build components like build tool, ci pipeline, dependencies, project version)
- ci (related to continuous integration deploys)
- chore (update grunt tasks etc; no production code change)
- docs (changes/additions to documentation)
- feat (new feature)
- fix (bug fix)
- refactor (refactor production code)
- perf (are special refactor commits, that improves performance)
- revert (revert changes)
- style (formatting, missing semi colons, etc; no code change)
- test (add missing tests, refactoring tests; no production code change)

Pattern: type(scope?/ aka component): subject

e.g.
1. feat(campaign-landing): add promo code form
2. fix(subscription-form): show correct success message
3. chore(app): add missing return types
