const NotificationMixin = {

    notify: {
        language: 'EN',
        notificationSystem: {
            options: {
                show: {
                    theme: 'dark',
                    icon: 'icon-person',
                    position: 'topCenter',
                    progressBarColor: 'rgb(0, 255, 184)',
                    buttons: [
                        ['<button>Ok</button>', function (instance, toast) {
                            alert("Hello world!");
                        }, true],
                        ['<button>Close</button>', function (instance, toast) {
                            instance.hide({
                                transitionOut: 'fadeOutUp',
                                onClosing: function(instance, toast, closedBy){
                                    console.info('closedBy: ' + closedBy);
                                }
                            }, toast, 'buttonName');
                        }]
                    ],
                    onOpening: function(instance, toast){
                        console.info('callback Collins');
                    },
                    onClosing: function(instance, toast, closedBy){
                        console.info('closedBy: ' + closedBy);
                    }
                },
                confirm: {
                    theme: 'dark',
                    icon: 'icon-person',
                    position: 'center',
                    timeout: 30000,
                    progressBarColor: 'rgb(0, 255, 184)',
                    overlay: true,
                    buttons: [
                        ['<button>Ok</button>', function (instance, toast) {
                            // alert("Hello world!");
                            instance.hide({
                                transitionOut: 'fadeOutUp',
                                onClosing: function(instance, toast, closedBy){
                                    console.info('closedBy: ' + closedBy);
                                }
                            }, toast, 'buttonName');
                        }, true],
                        ['<button>Close</button>', function (instance, toast) {
                            instance.hide({
                                transitionOut: 'fadeOutUp',
                                onClosing: function(instance, toast, closedBy){
                                    console.info('closedBy: ' + closedBy);
                                }
                            }, toast, 'buttonName');
                        }]
                    ],
                    onOpening: function(instance, toast){
                        console.info('callback Collins!');
                    },
                    onClosing: function(instance, toast, closedBy){
                        console.info('closedBy: ' + closedBy);
                    }
                },
                ballon: {
                    balloon: true,
                    position: 'bottomCenter'
                },
                info: {
                    //position: 'bottomLeft'
                    position: 'center',
                    overlay: true,
                },
                processing: {
                    position: 'center',
                    timeout: 60000,
                    close: false,
                    overlay: true,
                },
                success: {
                    //position: 'bottomRight'
                    position: 'topCenter',
                    timeout: 5000,
                },
                warning: {
                    position: 'topLeft'
                },
                error: {
                    //position: 'topRight'
                    position: 'topCenter',
                    timeout: 5000,
                },
                question: {
                    timeout: 60000,
                    close: false,
                    overlay: true,
                    toastOnce: true,
                    id: 'question',
                    zindex: 999,
                    position: 'center',
                    buttons: [
                        ['<button><b>YES</b></button>', function (instance, toast) {
                            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                        }, true],
                        ['<button>NO</button>', function (instance, toast) {
                            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                        }]
                    ],
                    onClosing: function(instance, toast, closedBy){
                        console.info('Closing | closedBy: ' + closedBy);
                    },
                    onClosed: function(instance, toast, closedBy){
                        console.info('Closed | closedBy: ' + closedBy);
                    }
                }
            }
        },
    },
}
export default NotificationMixin



//            this.$toast.show('Welcome!', 'Hey', this.notificationSystem.options.show);
//            this.$toast.show('Welcome!', 'Hey', this.notificationSystem.options.ballon);
//            this.$toast.info('Welcome!', 'Hello', this.notificationSystem.options.info);
//            this.$toast.success('Successfully inserted record!', 'OK', this.notificationSystem.options.success);
//            this.$toast.warning('You forgot important data', 'Caution', this.notificationSystem.options.warning);
//            this.$toast.error('Illegal operation', 'Error', this.notificationSystem.options.error);
//            this.$toast.question('Are you sure about that?', 'Hey', this.notificationSystem.options.question);

//positions: