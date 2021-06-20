// global CSS
import globalCss from "./style.css";
// CSS modules
import styles, { stylesheet } from "./style.module.css";

export function getGreetings() {
  const 价格 = document.querySelector(
    "#mod-detail-price > div > table > tbody td.ladder-3-1 > span.value.price-length-5"
  ).textContent;

  const 起批量 = document.querySelector(
    "#mod-detail-price > div > table > tbody > tr.amount > td.ladder-3-1 > span.value"
  ).textContent;

  const 运费 = document.querySelector(
    "#mod-detail-bd .cost-entries-type p:nth-child(2)>em"
  );

  // const 平均单价 = (价格 * `${起批量.match(/\d+/)[0]}` + 运费) / 起批量;
  const 平均单价 = 5;

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
