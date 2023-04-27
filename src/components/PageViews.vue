<script>
export default {
    props: ['page']
}
</script>

<template>
    <div class="container">
           <h1 class="emphasize">{{page.pageTitle}}</h1>
           <p>{{page.content}}</p>
       </div>
</template>
