/** @odoo-module **/
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { Component } from "@odoo/owl";
class SystrayIcon extends Component {
 setup() {
   super.setup(...arguments);
   this.action = useService("action");
 }

 _onClick() {
   this.action.doAction({
     type: "ir.actions.act_window",
     name: "Reparaciones",
     res_model: "repair.order",
     view_mode: "tree",
     views: [[false, "tree"]],
     target: "main",
   });
 }
}

SystrayIcon.template = "systray_reparaciones";
export const systrayItem = {
 Component: SystrayIcon,
};

registry.category("systray").add("SystrayIcon_reparaciones", systrayItem, { sequence: 5 });