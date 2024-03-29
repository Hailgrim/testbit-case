import { FC, useMemo } from 'react';
import {
  Area,
  AreaChart,
  Brush,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import { ITransaction } from '@/shared/server';
import { createShortNumber, formatDate, useT } from '@/shared/lib';
import { TransactionsChartContainer } from './TransactionsChartContainer';

export const TransactionsChart: FC<{
  legend?: string;
  data?: ITransaction[];
}> = ({ legend, data = [] }) => {
  const t = useT();
  const reversedData = useMemo(() => Array.from(data).reverse(), [data]);

  return (
    <TransactionsChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={reversedData}
          className="transactions"
          margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
        >
          <CartesianGrid vertical={false} stroke="var(--color-gray2)" />
          <XAxis
            dataKey="created_at"
            tickLine={false}
            axisLine={false}
            fontSize={12}
            stroke="var(--color-gray3)"
            height={40}
            tickMargin={10}
            minTickGap={90}
            tickFormatter={(tick) =>
              formatDate({
                date: new Date(tick),
                locale: t.localeCode,
                type: 'short',
              })
            }
          />
          <YAxis
            dataKey="amount"
            tickLine={false}
            axisLine={false}
            fontSize={12}
            stroke="var(--color-gray3)"
            tickMargin={14}
            orientation="right"
            scale="sqrt"
            tickFormatter={(tick) => createShortNumber(Number(tick))}
          />
          <Brush
            dataKey="created_at"
            height={24}
            tickFormatter={(tick) =>
              formatDate({
                date: new Date(tick),
                locale: t.localeCode,
                type: 'tiny',
              })
            }
            stroke="var(--color-white)"
            fill="var(--color-gray2)"
          >
            <LineChart
              data={reversedData}
              margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
            >
              <Line
                type="monotone"
                dataKey="amount"
                stroke="var(--color-gray3)"
                strokeWidth={1}
                dot={false}
              />
              <YAxis dataKey="amount" scale="sqrt" hide={true} />
            </LineChart>
          </Brush>
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            iconType="square"
            formatter={() => legend}
            wrapperStyle={{
              width: '85%',
              paddingTop: 10,
            }}
          />
          <defs>
            <linearGradient
              id="transactions__gradient"
              x1="147.969"
              y1="0"
              x2="147.969"
              y2="217"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue2)" />
              <stop
                offset="1"
                stopColor="var(--color-blue2)"
                stopOpacity="0.2"
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="amount"
            stroke="var(--color-blue2)"
            strokeWidth={2}
            fill="url(#transactions__gradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </TransactionsChartContainer>
  );
};
