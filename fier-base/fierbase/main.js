import './style.css'
import {submitBase} from "./fier-base.js";
import {openForm} from "./open.js";
import {loadData} from "./fier-base.js";

addEventListener('DOMContentLoaded', async function () {
    submitBase();
    openForm();
    loadData();
})


