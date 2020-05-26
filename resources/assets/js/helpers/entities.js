export function batchEntity(){
    return {
        warehouse_id: null,
        batch_number: null,
        exp_month: null,
        exp_year: null,
        barcode: null,
        amount: null,
    }
}

export function posSessionEntity(){
    return {
        id: null,
        status: null,
        trans_number: null,
        start_date: null,
        end_date: null,
        shop: null,
        cashier: null,
        orders: [],
    }
}

export function posOrderEntity(){

    let time = new Date();
    // let curr_hour = time.getHours();
    // let curr_min = time.getMinutes();
    let time_in = time.toLocaleString('en-US', { hour:'numeric', minute:'numeric', hour12: true });

    return {
        id: null,
        status: null,
        trans_date: null,
        order_type: 'pos order',
        trans_time: time_in,
        trans_number: null,
        reference_number: null,
        total_amount: 0,
        sub_total: 0,
        discount: 0,
        tax: 0,
        qn: 0,
        order_saved_status: false,
        customer: null,
        // customer: {
        //     display_as: null,
        //     type: 'Regular',
        //     store_credit: 0,
        //     balance: 0,
        //     credit_limit: 0,
        //     point_balance: 0,
        //     customer_set: false,
        //     image: null
        // },
        payments: [],
        receipts: [],
        items: [],
        time_in: time_in,
    }

}

export function itemEntity(item=null) {
    let item_model = {
        name: null,
        item_code: null,
        brand_id: null,
        batched_form: [],
        notes: null,
        item_type: null,
        inventory_tracking: 'None',
        //sku: null,
        barcode: null,
        item_note: null,
        measure_unit: null,
        single_unit_weight: null,
        units_per_pack: null,
        taxes: [],
        unit_storage_location: null,
        //practice_id: null,
        route: null,
        price: {
            id: null,
            unit_cost: null,
            pack_cost: null,
            unit_retail_price: null,
            pack_retail_price: null,
        },
        //This here
        status: true,
        alert_indicator_level: null,
        opening_qty: 0,
        as_of: null,
        unit_cost: null,
        pack_cost: null,
        unit_retail_price: null,
        pack_retail_price: null,
        gp_percent: null,
        gp_amount: null,
        selected_warehouse: [],
    };
    if (item){
        item_model.name = item.item_name.name;
    }
    return item_model;
}

export function stockTakeEntity(){
    return {
        trans_date: null,
        warehouse_id: null,
        product_group: null,
        supplier_id: null,
        product_subgroup_id: null,
        warehouse_location_id: null,
        product_type_id: null,
        description: null,
        adjustment_mode: 'Quantity',
        reason: null,
        trans_number: null,
        items: [],
    }
}