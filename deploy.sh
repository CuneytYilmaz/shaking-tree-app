# Uygulama www.shaking-tree-app.surge.sh üzerinde koşuyor.
# Package.json içerisinde yer alan yarn deploy komutu ile statik uygulamaların koşmasını sağlayan surge.sh üzerinde belirtilen sub domaine uygulama deploy ediliyor.

echo 'Building application...'
yarn build

echo 'Copying index.html as 404.html'
cp build/index.html build/404.html

echo 'Deploying...'
node_modules/.bin/surge --project ./build --domain shaking-tree-app.surge.sh

echo 'Deployed 🚀'