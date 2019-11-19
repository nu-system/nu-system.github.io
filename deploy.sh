set -e

yarn build

git add -A
git commit -m 'docs: update docs dev'
git push -f

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'docs: update docs master'

git push -f git@github.com:nu-system/nu-system.github.io master

cd -
