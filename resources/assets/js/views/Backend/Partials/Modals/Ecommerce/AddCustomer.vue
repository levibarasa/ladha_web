<template>
    <div class="modal fade" :id="modalId" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false" aria-labelledby="newCustomerModal" aria-hidden="true">
        <form @submit.prevent="saveCustomer()" class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
              <button :disabled="processing" type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span class="material-icons ">close</span>
              </button>
            </div>
            <div class="modal-body">
                <div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="inputState">Salute</label>
                            <select v-model="form.salute" :disabled="processing" required id="inputState" class="form-control">
                                <option selected>Mr</option>
                                <option>Mrs</option>
                                <option>Mss</option>
                                <option>Dr</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputFirstName">First name</label>
                            <input type="text" required :disabled="processing" v-model="form.first_name" class="form-control" id="inputFirstName" placeholder="First name">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputLast">Last name</label>
                            <input type="text" v-model="form.last_name" :disabled="processing" required class="form-control" id="inputLast" placeholder="Last name">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input type="email" :disabled="processing" v-model="form.email" class="form-control" id="inputEmail4" placeholder="Email">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputMobile">Mobile</label>
                            <input type="text" :disabled="processing" v-model="form.mobile" required class="form-control" id="inputMobile" placeholder="e.g 2547, 07, +2547">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
              <button :disabled="processing" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button :disabled="processing" type="submit" class="btn btn-danger">
                  <span v-if="processing" class="material-icons d-block mb-1">block</span>
                  <span v-else>Save</span>
              </button>
            </div>
          </div>
        </form>
    </div>
</template>
<script>
import { post } from '../../../../../helpers/api';
import {SHOP_POS_CUSTOMERS} from "../../../../../router/api";
import { createHtmlErrorString, reset_forms } from '../../../../../helpers/helpermethods';
export default {
    name: "AddCustomer",
    props: {
        modalId: {
            type: String,
            default: "newCustomerModal",
        },
        modalTitle: {
            type: String,
            default: "Create New Customer",
        },
        newCustomerEmitter: {
            type: Array,
            default: [],
        }
    },
    data(){
        return {
            processing: false,
            form: {
                first_name: '',
                last_name: '',
                email: '',
                mobile: '',
                salute: '',
                //items: JSON.stringify([{id:'iii',qty:10}])
            }
        }
    },
    methods: {
        saveCustomer(){
            this.processing = true;
            post(SHOP_POS_CUSTOMERS,this.form)
            .then((res) => {
                if(res.data.status_code === 200) {
                    this.processing = false;
                    this.newCustomerEmitter.push(res.data.results);
                    this.$emit('customer-created-event',this.newCustomerEmitter);
                    this.$awn.success(res.data.description);
                    this.form = reset_forms(this.form);
                    $('#'+this.modalId+'').modal('hide');
                }
            }).catch((err) => {
                if(err.response.status === 422) {
                    this.$awn.warning(createHtmlErrorString(err.response.data.errors));
                }else{
                    this.$awn.warning(err.response.data.description);
                }
                this.processing = false;
            });
        }
    }
}
</script>