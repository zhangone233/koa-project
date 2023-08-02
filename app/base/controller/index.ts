import { app } from "@/app";

abstract class ControllerMethod {}

export default class Controller extends ControllerMethod {
  protected readonly app: App = app;
}
