export default {
    payments: {
        mpesa: {
            service_name: 'M-PESA',
            currency: 'KES',
            amount: 600,
            pay_bill_number: '000000',
            account: 'AC',
            confirmation_code: '',
            mobile: '',
            chosen: false,
            isactive: ''
        },
        airtel: {
            service_name: 'Airtel Money',
            currency: 'KES',
            amount: 600,
            nickname: 'AFYAMKO',
            pay_bill_number: '000000',
            account: 'AC',
            confirmation_code: '',
            mobile: '',
            chosen: false,
            isactive: ''
        },
        kcb: {
            chosen: false,
            isactive: ''
        },
        coop: {
            chosen: false,
            isactive: ''
        },
        showsecured: true
    },
    mpesaActive(){
        this.payments.mpesa.chosen = true;
        this.payments.airtel.chosen = false;
        this.payments.kcb.chosen = false;
        this.payments.coop.chosen = false;
        this.payments.mpesa.isactive = 'activepayment';
        this.payments.airtel.isactive = '';
        this.payments.kcb.isactive = '';
        this.payments.coop.isactive = '';
        this.payments.showsecured = false
    },
    airtelActive(){
        this.payments.mpesa.chosen = false;
        this.payments.airtel.chosen = true;
        this.payments.kcb.chosen = false;
        this.payments.coop.chosen = false;
        this.payments.mpesa.isactive = '';
        this.payments.airtel.isactive = 'activepayment';
        this.payments.kcb.isactive = '';
        this.payments.coop.isactive = '';
        this.payments.showsecured = false
    },
    kcbActive(){
        this.payments.mpesa.chosen = false;
        this.payments.airtel.chosen = false;
        this.payments.kcb.chosen = true;
        this.payments.coop.chosen = false;
        this.payments.mpesa.isactive = '';
        this.payments.airtel.isactive = '';
        this.payments.kcb.isactive = 'activepayment';
        this.payments.coop.isactive = '';
        this.payments.showsecured = false
    },
    coopActive(){
        this.payments.mpesa.chosen = false;
        this.payments.airtel.chosen = false;
        this.payments.kcb.chosen = false;
        this.payments.coop.chosen = true;
        this.payments.mpesa.isactive = '';
        this.payments.airtel.isactive = '';
        this.payments.kcb.isactive = '';
        this.payments.coop.isactive = 'activepayment';
        this.payments.showsecured = false
    }
}