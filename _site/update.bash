cd ../../mymedia/thain.github.io
for i in $( ls ); do
	rm -r $i
done
cd ../../websites/ccmp
for i in $( ls ); do
	cp -r $i ../../mymedia/thain.github.io
done
echo "gem "github-pages", group: :jekyll_plugins" >> ../../mymedia/thain.github.io/Gemfile
cd ../../mymedia/thain.github.io
git add .; git commit -m "automated update"; git push --force