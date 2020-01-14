import React from 'react';
import { Link } from 'gatsby';

import './Posts.scss';

const Posts = () => {
  return (
    <section className=" section section__posts">
      <div className="section__posts-info">
        <div className="section__posts-title">
          Front-end & back-end expertise from development to delivery
        </div>
        <Link to="/blog" className="section__posts-link">
          MORE BLOG POSTS
        </Link>
      </div>
      {/* <div class="section__posts-block">
      <div class="section__blog-slider swiper-container">
        <div class="swiper-wrapper">
          <?php
          $args = array(
            'posts_per_page' => 3
          );

          $query = new WP_Query($args);

          if ($query->have_posts()) {
            while ($query->have_posts()) {
              $query->the_post(); ?>
          <div class="section__post-item swiper-slide">
            <div class="section__post-img">
              <a href="<?php the_permalink(); ?>">
                <?php the_post_thumbnail(); ?>
              </a>

            </div>
            <div class="section__post-info">
              <div class="section__post-date"><?php the_date('M d'); ?></div>
              <h3 class="section__post-title">
                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
              </h3>
            </div>
          </div>
          <?php }
          } else {
            // Постов не найдено
          }
          wp_reset_postdata();

          ?>
        </div>

        <div class="section__blog-slider-pagination swiper-pagination"></div>
      </div>
    </div> */}
    </section>
  );
};

export default Posts;
