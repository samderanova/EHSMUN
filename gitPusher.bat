call npm run build
cd build
call npm run deploy
cd ..
call git init
call git add .
set /p commitMessage = Enter the commit message in quotation marks: