import React, { Component } from 'react';

class WebUSB extends Component {
    findDevice() {
        navigator.usb.getDevices().then(devices => {
            devices.map(device => {
                console.log(device);
            });
        });
    }
    connectDevice() {
        var device;
        // Connect to the POD HD500X
        navigator.usb.requestDevice({ filters: [{ vendorId: 0x0e41 }] })
            .then(selectedDevice => {
                console.log(selectedDevice);
                device = selectedDevice;
                return device.open();
            })
            .then(() => device.selectConfiguration(1))
            .then(() => device.claimInterface(2))
            .then(() => device.controlTransferOut({
                requestType: 'class',
                recipient: 'interface',
                request: 0x22,
                value: 0x01,
                index: 0x02
            })) // Ready to receive data
            .then(() => device.transferIn(5, 64)) // Waiting for 64 bytes of data from endpoint #5.
            .then(result => {
                let decoder = new TextDecoder();
                console.log('Received: ' + decoder.decode(result.data));
            })
            .catch(error => { console.log(error); });
    }
    render() {
        return (
            <div>
                <button onClick={this.findDevice}>Find Device</button>
                <button onClick={this.connectDevice}>Connect Device</button>
            </div >
        );
    }
}

export default WebUSB;