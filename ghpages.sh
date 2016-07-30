DIST=./tmp/gh-pages
rm -fr $DIST && mkdir $DIST && cp -vr ./src/assets ./dist-editor/* $DIST && cp -vr ./public/* $DIST && cd $DIST && rm stats.json && echo yopage.ru > CNAME && \
git init && git remote add origin git@github.com:BrandyMint/bml-react.git && git add . && git commit -m 'publicate gh-pages' && git checkout -b gh-pages && git push -f origin gh-pages
