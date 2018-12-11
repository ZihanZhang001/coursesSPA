# Assignment 2 - Vue app - Automated development process.

Name: Zihan Zhang

Student No.:  20082258

## Overview.

This is a simple vue web app that enables users to release and manage courses.

## E2E Testing.

        $ npx cypress run --spec cypress/integration/courses.spec.js
        
        ================================================================================
        
          (Run Starting)
        
          ┌────────────────────────────────────────────────────────────────────────────┐
          │ Cypress:  3.1.3                                                            │
          │ Browser:  Electron 59 (headless)                                           │
          │ Specs:    1 found (courses.spec.js)                                        │
          │ Searche…  cypress/integration/courses.spec.js                              │
          └────────────────────────────────────────────────────────────────────────────┘
        
        
        ────────────────────────────────────────────────────────────────────────────────
                                                                                        
          Running: courses.spec.js...                                          (1 of 1) 
        
        
          Manage Courses page
            ✓ allows a course to be deleted (14814ms)
            ✓ edit a course (3748ms)
        
        
          2 passing (19s)
        
        
          (Results)
        
          ┌───────────────────────────────┐
          │ Tests:        2               │
          │ Passing:      2               │
          │ Failing:      0               │
          │ Pending:      0               │
          │ Skipped:      0               │
          │ Screenshots:  0               │
          │ Video:        true            │
          │ Duration:     18 seconds      │
          │ Spec Ran:     courses.spec.js │
          └───────────────────────────────┘
        
        
          (Video)
        
          - Started processing:   Compressing to 32 CRF
          - Finished processing:  /Users/zhangzihan/Desktop/coursevue-3.0/cypress/videos/courses.spec.js.mp4 (2 seconds)
        
        
        ================================================================================
        
          (Run Finished)
        
        
              Spec                                    Tests  Pass…  Fail…  Pend…  Skip… 
          ┌────────────────────────────────────────────────────────────────────────────┐
          │ ✔ courses.spec.js                 00:18      2      2      -      -      - │
          └────────────────────────────────────────────────────────────────────────────┘
            All specs passed!                 00:18      2      2      -      -      -  


## Continuous Integration.

https://travis-ci.org/ZihanZhang001/coursesSPA

## Automated Deployment.

http://enchanting-structure.surge.sh

## Extra features.

I used Bundling (Webpack) E2E testing Continuous Integration and auto-deployment to test my web app.

## Appendix.

        $ npx cypress run
        
        ================================================================================
        
          (Run Starting)
        
          ┌────────────────────────────────────────────────────────────────────────────┐
          │ Cypress:  3.1.3                                                            │
          │ Browser:  Electron 59 (headless)                                           │
          │ Specs:    5 found (aboutus.spec.js, contactus.spec.js, courses.spec.js, h… │
          └────────────────────────────────────────────────────────────────────────────┘
        
        
        ────────────────────────────────────────────────────────────────────────────────
                                                                                        
          Running: aboutus.spec.js...                                          (1 of 5) 
        
        
          About us
            ✓ Shows a header (1354ms)
        
        
          1 passing (1s)
        
        
          (Results)
        
          ┌───────────────────────────────┐
          │ Tests:        1               │
          │ Passing:      1               │
          │ Failing:      0               │
          │ Pending:      0               │
          │ Skipped:      0               │
          │ Screenshots:  0               │
          │ Video:        true            │
          │ Duration:     1 second        │
          │ Spec Ran:     aboutus.spec.js │
          └───────────────────────────────┘
        
        
          (Video)
        
          - Started processing:   Compressing to 32 CRF
          - Finished processing:  /Users/zhangzihan/Desktop/coursevue-3.0/cypress/videos/aboutus.spec.js.mp4 (0 seconds)
        
        
        ────────────────────────────────────────────────────────────────────────────────
                                                                                        
          Running: contactus.spec.js...                                        (2 of 5) 
        
        
          Contact us
            ✓ Shows a header (1030ms)
        
        
          1 passing (1s)
        
        
          (Results)
        
          ┌─────────────────────────────────┐
          │ Tests:        1                 │
          │ Passing:      1                 │
          │ Failing:      0                 │
          │ Pending:      0                 │
          │ Skipped:      0                 │
          │ Screenshots:  0                 │
          │ Video:        true              │
          │ Duration:     1 second          │
          │ Spec Ran:     contactus.spec.js │
          └─────────────────────────────────┘
        
        
          (Video)
        
          - Started processing:   Compressing to 32 CRF
          - Finished processing:  /Users/zhangzihan/Desktop/coursevue-3.0/cypress/videos/contactus.spec.js.mp4 (0 seconds)
        
        
        ────────────────────────────────────────────────────────────────────────────────
                                                                                        
          Running: courses.spec.js...                                          (3 of 5) 
        
        
          Manage Courses page
            ✓ allows a course to be deleted (7310ms)
            ✓ edit a course (4411ms)
        
        
          2 passing (12s)
        
        
          (Results)
        
          ┌───────────────────────────────┐
          │ Tests:        2               │
          │ Passing:      2               │
          │ Failing:      0               │
          │ Pending:      0               │
          │ Skipped:      0               │
          │ Screenshots:  0               │
          │ Video:        true            │
          │ Duration:     11 seconds      │
          │ Spec Ran:     courses.spec.js │
          └───────────────────────────────┘
        
        
          (Video)
        
          - Started processing:   Compressing to 32 CRF
          - Finished processing:  /Users/zhangzihan/Desktop/coursevue-3.0/cypress/videos/courses.spec.js.mp4 (1 second)
        
        
        ────────────────────────────────────────────────────────────────────────────────
                                                                                        
          Running: home-page.spec.js...                                        (4 of 5) 
        
        
          Home page
            ✓ Shows a header (1799ms)
            Navigation bar
              ✓ Shows the required links (622ms)
              ✓ Redirects when links are clicked (757ms)
        
        
          3 passing (3s)
        
        
          (Results)
        
          ┌─────────────────────────────────┐
          │ Tests:        3                 │
          │ Passing:      3                 │
          │ Failing:      0                 │
          │ Pending:      0                 │
          │ Skipped:      0                 │
          │ Screenshots:  0                 │
          │ Video:        true              │
          │ Duration:     3 seconds         │
          │ Spec Ran:     home-page.spec.js │
          └─────────────────────────────────┘
        
        
          (Video)
        
          - Started processing:   Compressing to 32 CRF
          - Finished processing:  /Users/zhangzihan/Desktop/coursevue-3.0/cypress/videos/home-page.spec.js.mp4 (0 seconds)
        
        
        ────────────────────────────────────────────────────────────────────────────────
                                                                                        
          Running: release.spec.js...                                          (5 of 5) 
        
        
          Release page
            ✓ allows a valid course to be submitted (3251ms)
            ✓ shows error messages for incomplete form fields (1417ms)
        
        
          2 passing (5s)
        
        
          (Results)
        
          ┌───────────────────────────────┐
          │ Tests:        2               │
          │ Passing:      2               │
          │ Failing:      0               │
          │ Pending:      0               │
          │ Skipped:      0               │
          │ Screenshots:  0               │
          │ Video:        true            │
          │ Duration:     4 seconds       │
          │ Spec Ran:     release.spec.js │
          └───────────────────────────────┘
        
        
          (Video)
        
          - Started processing:   Compressing to 32 CRF
          - Finished processing:  /Users/zhangzihan/Desktop/coursevue-3.0/cypress/videos/release.spec.js.mp4 (1 second)
        
        
        ================================================================================
        
          (Run Finished)
        
        
              Spec                                    Tests  Pass…  Fail…  Pend…  Skip… 
          ┌────────────────────────────────────────────────────────────────────────────┐
          │ ✔ aboutus.spec.js                 00:01      1      1      -      -      - │
          ├────────────────────────────────────────────────────────────────────────────┤
          │ ✔ contactus.spec.js               00:01      1      1      -      -      - │
          ├────────────────────────────────────────────────────────────────────────────┤
          │ ✔ courses.spec.js                 00:11      2      2      -      -      - │
          ├────────────────────────────────────────────────────────────────────────────┤
          │ ✔ home-page.spec.js               00:03      3      3      -      -      - │
          ├────────────────────────────────────────────────────────────────────────────┤
          │ ✔ release.spec.js                 00:04      2      2      -      -      - │
          └────────────────────────────────────────────────────────────────────────────┘
            All specs passed!                 00:22      9      9      -      -      -  
        


