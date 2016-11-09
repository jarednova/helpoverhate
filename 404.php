<?php

	$context = Timber::get_context();
	$context['inverse'] = false;
	Timber::render('404.twig', $context);