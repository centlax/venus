pack:
	npm pack && tar -xzf centlax-*.tgz -C . && rm -rf centlax-ui-*.tgz
clean: 
	rm -rf package

