import { Directory, object, func, context, File } from "@dagger.io/dagger"

@object()
class Context {
  @func()
  async test(@context("/") dir: Directory, @context("/dagger.json") conf: File): Promise<string[]> {
    const res = await dir.entries()

    return [...res, await conf.contents()]
  }
}
