<template>
  <div class="blog-main-wrapper section-padding">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-4 order-2 order-lg-1 mtn-30 blog-widget__wrapper">
          <SidebarWidget :sidebar="data.sidebar" />
        </div>

        <div class="col-xl-9 col-lg-8 order-1 order-lg-2">
          <div class="blog-post">
            <div class="blog-post__thumb">
              <v-lazy-image :src="blog.image" :alt="blog.title" />
            </div>
            <div class="blog-post__content blog-details">
              <h4 class="blog-title">
                {{ blog.title }}
              </h4>
              <div class="blog-meta d-flex justify-content-between">
                <div class="date">
                  {{ blog.postDate }}
                </div>
                <ul class="blog-meta-action">
                  <li>
                    <button>
                      <i class="fa fa-comment" />
                      {{ blog.comment }}
                    </button>
                  </li>
                  <li>
                    <button>
                      <i class="fa fa-heart-o" />
                      {{ blog.like }}
                    </button>
                  </li>
                </ul>
              </div>
              <p>
                Bigger ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis consequuntur illo
                aliquid nihil ad neque, debitis praesentium libero ullam asperiores exercitationem deserunt inventore
                facilis, officiis,"
              </p>
              <blockquote>
                <h4 class="blockquote-title">
                  Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur.
                  venenatis elit ac ultrices convallis.
                </h4>
              </blockquote>

              <p class="pb-4">
                aliquam maiores asperiores recusandae commodi blanditiis ipsum tempora culpa possimus
                assumenda ab quidem a voluptatum quia natus? Ex neque, saepe reiciendis quasi velit perspiciatis error
                vel quas quibusdam autem nesciunt voluptas oditquis dignissimos aspernatur voluptatum est repellat.
                Pariatur praesentiumcorrupti"
              </p>
              <div class="blog-post__thumb">
                <v-lazy-image src="/img/blog/blog-details-2.jpg" alt="blog image" />
              </div>
              <p>
                deserunt ducimus quo doloremque nostrum aspernatur saepe cupiditate sit autem exercitationem debitis,
                maiores vitae perferendis nemo? Voluptas illo, animitemporibus quod earum molestias eaque, iure rem amet
                autem dignissimos officia dolores numquam distinctio esse voluptates optio pariatur aspernatur omnis?
                Ipsam qui commodi velit natus reiciendis quod quibusdam nemo eveniet similique animi!"
              </p>
            </div>
          </div>

          <div class="about-author mt-70">
            <div class="about-author__image">
              <img src="/img/blog/author.jpg" alt="author thumb">
            </div>
            <div class="about-author__content">
              <h4 class="heading">
                About the author
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officiis voluptatem libero
                perspiciatis veritatis sequi corrupti aperiam nostrum voluptas aliquid vel dolorem eos eius.
              </p>
              <h6 class="author-name">
                Phillipp Bertram
              </h6>
            </div>
          </div>

          <BlogComment :comment="data.blogComment" />

          <BlogCommentForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'
import { useRoute } from '@nuxtjs/composition-api'
import VLazyImage from 'v-lazy-image'
import data from '../data/blog.json'

export default defineComponent({
  components: {
    VLazyImage
  },

  setup () {
    const route = useRoute()
    const slug = ref(route.value.params.slug)
    const blog = computed(() => data.blog.blogPosts.find(el => el.slug === slug.value))
    return {
      data,
      blog
    }
  }
})
</script>
