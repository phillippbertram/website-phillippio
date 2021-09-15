<template>
  <div class="comment-wrapper">
    <h3 class="heading">
      {{ comment.heading }}
    </h3>
    <ul>
      <li
        v-for="comment in comment.comments"
        :key="comment.id"
        class="comment"
        :class="{'comment__reply': comment.isReply}"
      >
        <div class="comment__avatar">
          <v-lazy-image :src="comment.authorImage" alt="thumbnail" />
        </div>
        <div class="comment__body">
          <div class="header">
            <h6 class="author-name">
              {{ comment.authorName }}
            </h6>
            <p class="comment-date">
              {{ comment.commentTime }}
            </p>
          </div>
          <p>{{ comment.desc }}</p>
          <button class="reply-btn">
            Reply
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import VLazyImage from 'v-lazy-image'
import { defineComponent } from '@vue/composition-api'

interface Comment {
  id: string;
  heading: string;
  desc: string;
  authorImage: string;
  authorName: string;
  commentTime: string;
  isReply: boolean;
}

export default defineComponent({
  components: {
    VLazyImage
  },

  props: {
    comment: {
      type: Object as () => Comment,
      required: true
    }
  }
})
</script>
