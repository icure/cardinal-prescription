<script lang="ts">
    import { onDestroy } from "svelte";

    let {threshold = 0, loadMore }:{threshold: number, loadMore: () => void} = $props()

    let isLoadMore = false;
    let infiniteScrollComponent;

    const onScroll = e => {
        const offset = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop;

        if (offset <= threshold) {
            if (!isLoadMore) {
                loadMore()
            }
            isLoadMore = true;
        } else {
            isLoadMore = false;
        }
    };

    $effect(() => {
        if (infiniteScrollComponent) {
            const element =  infiniteScrollComponent.parentNode;
            element?.addEventListener("scroll", onScroll);
            element?.addEventListener("resize", onScroll);
        }
    });

    onDestroy(() => {
        if (infiniteScrollComponent) {
            const element = infiniteScrollComponent.parentNode;

            element?.removeEventListener("scroll", null);
            element?.removeEventListener("resize", null);
        }
    });
</script>

<div bind:this={infiniteScrollComponent} style="width:0px" ></div>
