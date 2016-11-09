<?php

	$context = Timber::get_context();
	$context['intro_text'] = "Boston Built is a directory of Boston’s best digital talent. Use it to explore Boston's digital community, and the wealth of talent, resources, and opportunities it has to offer. Maybe you’re looking to hire a company to help you execute your digital project. Perhaps you're on the hunt for a new job, or scoping out your peers in the industry. Boston Built is your starting point.";
	$context['inverse'] = true;
	$context['categories'] = get_categories();
	$context['pagination'] = Timber::get_pagination();
	$context['featured_companies'] = Timber::get_posts(array(
		"post_type" => "agency",
		"meta_key" => "thumb",
		'posts_per_page' => 3,
		'orderby' => 'rand'
	));
	Timber::render('index.twig', $context);