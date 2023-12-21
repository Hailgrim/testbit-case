const sizes = {
  /** 0 */
  xs: 0,
  /** 375 */
  sm: 375,
  /** 754 */
  md: 754,
  /** 1200 */
  lg: 1200,
  /** 1536 */
  xl: 1536,
};

const media = {
  /** 0+ */
  xs: `@media (min-width: ${sizes.xs}px)`,
  /** 375+ */
  sm: `@media (min-width: ${sizes.sm}px)`,
  /** 754+ */
  md: `@media (min-width: ${sizes.md}px)`,
  /** 1200+ */
  lg: `@media (min-width: ${sizes.lg}px)`,
  /** 1536+ */
  xl: `@media (min-width: ${sizes.xl}px)`,
};

const theme = {
  sizes,
  media,
};
export default theme;
