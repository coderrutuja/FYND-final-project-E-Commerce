<script>
export default {
    props: ['page', 'isActive'],
    computed: {
        activeClasses() {
            return {
                active: this.isActive,
                emphasize: this.isActive
            };
        }
    }
}
</script>

<template>
    <a
        class="nav-link"
        :class="{active: activePage == index}"
        aria-current="page"
        :href="page.link.url"
        :title="`This link goes to ${page.link.text} page`"
        @click.prevent="navLinkClick(index)"
    >{{ page.link.text }}</a>
</template>

<style scope>
   .emphasize:hover {
    text-decoration: none;
    color: grey;
   }
</style>