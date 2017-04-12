<?php

require_once('lib/HOH_Org.php');

add_action('init', function() {

	register_post_type('agency', array(
		'public' => true,
		'label' => 'Organizations',
		'taxonomies' => array('category'),
		'rewrite' => array('slug' => 'organizations')
		));

});


add_action('pre_get_posts', function ( $query ) {
	if ( $query->is_main_query() && !is_admin() && !is_singular() ) {
   		$query->set('post_type', 'agency');
   		$query->set('orderby', 'title');
   		$query->set('order', 'ASC');
	}
});	


add_filter('acf/settings/google_api_key', function () {
    return 'AIzaSyADXNKuWEVzH3Tf0kq8hbKYEhGQOfGGJ4k';
});