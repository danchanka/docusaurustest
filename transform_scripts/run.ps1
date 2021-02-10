$mode = $args[0]

if ($mode -eq 'all') { 
	rd docusaurustest/docs -r >$null
	yarn --cwd ./confluence-to-markdown start ../LSFUS ../docusaurustest/docs
	robocopy ./docusaurustest/docs/LSFUS ./docusaurustest/docs /e /copyall /move >$null
}

python build_maps.py LSFUS

python transform_md.py docusaurustest/docs/

python create_sidebar.py docusaurustest/docs/index.md docusaurustest/sidebars.js

yarn --cwd ./docusaurustest/ start

