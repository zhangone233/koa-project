import Controller from "@app/base/controller";

export default class IndexController extends Controller {
  async testRequest(ctx: App.Ctx) {
    console.log(ctx, "ctx");
    console.log(this, "this");

    ctx.response.status = 202;
    ctx.body = {
      code: 0,
      message: "ttt",
    };
  }
}
