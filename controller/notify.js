const pushNotification = require('../middleware/service');
const { ONE_SIGNAL_CONFIG } = require('../middleware/app.config');

const startNotification = (req, res) => {

    const { message, title } = req.body;

    var messages = {
        app_id: ONE_SIGNAL_CONFIG.APP_ID,
        headings: { "en": title },
        contents: { "en": message },
        included_segments: ["Active Users"],
        content_available: true,
        small_icon: "ic_notification_icon",
        data: {
            PushTitle: "CUSTOM_NOTIFICATION"
        }
    };

    pushNotification.sendNotification(messages, function(err, result) {
        if (err) console.log(err)

        res.status(200).json({
            msg: "notification successful",
            success: true
        });
        console.log(result);
    })
}

const startSingleNotification = (req, res) => {

    const { message, devices, title } = req.body;

    var messages = {
        app_id: ONE_SIGNAL_CONFIG.APP_ID,
        headings: ["en", title],
        contents: ["en", message],
        small_icon: "ic_notification_icon",
        included_segments: ["include_player_ids"],
        include_player_ids: devices,
        data: {
            PushTitle: "CUSTOM_NOTIFICATION"
        }
    };

    pushNotification.sendNotification(messages, function(err, result) {
        if (err) console.log(err)

        res.status(200).json({
            msg: "notification successful",
            success: true
        });
        console.log(result);
    })
}

module.exports = { startNotification, startSingleNotification, saveId }

//https://documentation.onesignal.com/docs/generate-an-ios-push-certificate