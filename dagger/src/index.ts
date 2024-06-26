import { Directory, object, func, context } from "@dagger.io/dagger"

@object()
class Context {
  @func()
  async test(@context("/") dir: Directory): Promise<string[]> {
    return dir.entries()
  }
}
