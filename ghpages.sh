DIST=./tmp/ghpages
rm -fr $DIST && mkdir $DIST && cp -vr ./src/assets ./dist-editor/* $DIST && cp -vr ./public/* $DIST && cd $DIST && rm stats.json && echo yopage.ru > CNAME && \
git init && git remote add origin git@github.com:BrandyMint/bml-react.git && git add . && git commit -m 'publicate ghpages' && git checkout -b ghpages && git push -f origin ghpages
