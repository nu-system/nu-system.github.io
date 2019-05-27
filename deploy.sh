set -e

yarn docs:build

cd .vuepress/dist

git init
git add -A
git commit -m 'docs: update docs'

git push -f git@github.com:yued-fe/nu-system.git master:gh-pages

cd -
