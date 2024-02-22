describe("app lanch & show options", () => {
  it("onLaunch onShow", async () => {
    const HOME_PATH = "/pages/index"
    const page = await program.reLaunch(HOME_PATH)
    await page.waitFor(1000)
    expect(await page.callMethod("checkLaunchPath")).toBe(true)
  })
})
