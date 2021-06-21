// global CSS
import globalCss from "./style.css";
// CSS modules
import styles, { stylesheet } from "./style.module.css";

export function getGreetings() {
  const itemInfo = ((obj) =>
    function () {
      return {
        价格: this.refPrice,
        起批量: this.beginAmount,
        运费: 6,
      };
    }.apply(obj))(iDetailConfig);

  const { 价格, 起批量, 运费 } = itemInfo;

  const 平均单价 = (价格 * 起批量 + 运费) / 起批量;

  return (
    <>
      <div className={styles.panel}>
        <p>价格：{价格}</p>
        <p>起批量：{起批量}</p>
        <p>运费：{运费}</p>
        <p>平均单价：{平均单价}</p>
      </div>
      <style>{globalCss}</style>
      <style>{stylesheet}</style>
    </>
  );
}
