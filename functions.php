<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );
         
if ( !function_exists( 'child_theme_configurator_css' ) ):
    function child_theme_configurator_css() {
        wp_enqueue_style( 'chld_thm_cfg_child', trailingslashit( get_stylesheet_directory_uri() ) . 'style.css', array( 'astra-theme-css','woocommerce-layout','woocommerce-smallscreen','woocommerce-general' ) );
    }
endif;
add_action( 'wp_enqueue_scripts', 'child_theme_configurator_css', 10 );

// END ENQUEUE PARENT ACTION

// Dodanie pełnoekranowego banera graficznego kategorii

remove_action('woocommerce_archive_description', 'woocommerce_taxonomy_archive_description', 10);
add_action('woocommerce_archive_description', 'astra_custom_category_banner_with_title', 5);

function astra_custom_category_banner_with_title() {
    if (is_product_category()) {
        $term = get_queried_object();
        $thumbnail_id = get_term_meta($term->term_id, 'thumbnail_id', true);
        $image = wp_get_attachment_url($thumbnail_id);

        echo '<div class="astra-category-banner-wrapper">';

        if ($image) {
            echo '<div class="astra-category-banner-full">';
            echo '<img src="' . esc_url($image) . '" alt="' . esc_attr($term->name) . '" />';
            echo '</div>';
        }

 // Tytuł i opis w kontenerze
        echo '<div class="ast-container astra-category-header">';
        echo '<h1 class="woocommerce-products-header__title">' . esc_html($term->name) . '</h1>';
        if ($term->description) {
            echo '<div class="term-description">' . wp_kses_post($term->description) . '</div>';
        }
        echo '</div>';

        echo '</div>';
    }
}



// Newsletter na stronie sklepu i kategorii produktów
add_action('woocommerce_after_main_content', 'astra_insert_mailpoet_form_before_footer', 5);
function astra_insert_mailpoet_form_before_footer() {
    if (function_exists('is_woocommerce') && is_woocommerce()) {
        echo get_custom_mailpoet_html();
    }
}

//  Newsletter na stronie koszyka
add_action('woocommerce_after_cart', 'astra_insert_mailpoet_form_cart');
function astra_insert_mailpoet_form_cart() {
    echo get_custom_mailpoet_html();
}

//  Newsletter na stronie płatności
add_action('woocommerce_after_checkout_form', 'astra_insert_mailpoet_form_checkout');
function astra_insert_mailpoet_form_checkout() {
    echo get_custom_mailpoet_html();
}

// // Wspólna funkcja generująca formularz newslettera
function get_custom_mailpoet_html() {
    return '
    <div class="newsletter-full-wrapper">
        <div class="newsletter-section">
            <div class="ast-container newsletter-inner-container">
                <div class="newsletter-text">
                    <h2>Subscribe to Our Newsletter</h2>
                    <p>Get 5% Off Your First Order
Sign up to receive your discount and enjoy exclusive seasonal offers—perfect for occasions like Christmas, Valentine’s Day, and more!</p>
                </div>
                <div class="newsletter-form">
                    ' . do_shortcode('[mailpoet_form id="1"]') . '
                </div>
            </div>
        </div>
    </div>';
}




// // Dodaj secondary image na hover w katalogu produktów WooCommerce
add_action( 'woocommerce_before_shop_loop_item_title', 'add_hover_image_to_products', 20 );

function add_hover_image_to_products() {
    global $product;

    $attachment_ids = $product->get_gallery_image_ids();

    if ( isset( $attachment_ids[0] ) ) {
        $secondary_image_id = $attachment_ids[0];
        $secondary_image_html = wp_get_attachment_image( $secondary_image_id, 'woocommerce_thumbnail', false, array( 'class' => 'secondary-image' ) );

        echo $secondary_image_html;
    }
}
// stylizacja opisu produktu
function custom_excerpt_background_style() {
    echo '<style>
        .woocommerce div.product .woocommerce-product-details__short-description {
            background-color: #ffd1dc;
            padding: 15px;
            border-radius: 6px;
            font-size: 16px;
            line-height: 1.6;
        }
    </style>';
}
add_action('wp_head', 'custom_excerpt_background_style');

// ustawienie jezyka angielskiego w sklepie
	add_filter('locale', function($locale) {
    return 'en_GB'; 
});


