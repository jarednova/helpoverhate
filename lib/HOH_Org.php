<?php

class HOH_Org extends \Timber\Post {
	
	function address() {
		$addy =  $this->street_number . ' ' . $this->street_name . ' ' . $this->street_abbrev;
		if ( strlen($this->floor) ) {
			$addy .= ', ' . $this->floor;
		}
		return $addy;
	}

}