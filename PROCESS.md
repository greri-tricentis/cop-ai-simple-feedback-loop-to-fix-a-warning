use the following approach to fix multiple issues in the same PR:

1. Create new branch from main (only once at the start)
2. Fix one issue at a time
3. Always run unit tests after fix to verify there is no regression
4. Add unit tests if it makes sense
5. Review code
6. Provide changes based on code review
7. Always run unit tests after fix to verify there is no regression
8. Commit changes with descriptive message
9. Continue to next issue (go back to step 2) until all issues are fixed
10. Push all commits to the branch
11. Create PR (only once after all fixes)
12. Open the PR on GitHub web browser
13. Create a summary file documenting all completed work (list all fixed issues, commits, test results, and PR link)