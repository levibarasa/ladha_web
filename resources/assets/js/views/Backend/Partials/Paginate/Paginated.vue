<template>
    <nav aria-label="Page navigation example">
        <form class="form-inline float-left">
        <label class="my-1 mr-2 d-none d-md-block" for="show-data">Showing 10 out of 478</label>
        <select class="form-control" id="show-data">
            <option selected>25</option>
            <option value="1">50</option>
            <option value="2">100</option>
            <option value="3">all</option>
        </select>
        </form>
        <ul class="pagination mt-3 justify-content-end">
            <li class="page-item">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: "Paginated",
}
</script>