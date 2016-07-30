DIST=./tmp/ghpages
rm -fr $DIST && mkdir $DIST && cp -vr ./src/assets ./dist-editor/* $DIST && cd $DIST && rm stats.json && \
git init && git remote add origin git@github.com:BrandyMint/bml-react.git && git add . && git commit -m 'publicate ghpages' && git checkout -b ghpages && git push -f origin ghpages
