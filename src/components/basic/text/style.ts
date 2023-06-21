import styled from 'styled-components'
import { GV } from '../../../utils/style.util'

export interface InlineTextPropsType {
    color?:				string
    size?:				string
    weight?:			string
    mb?:				string
    align?:				'left' | 'center' | 'right'
	tcase?:				'uppercase' | 'lowercase' | 'capitalize'
}

type QueryType = { [key: string]: Partial<InlineTextPropsType> };

export interface TextPropsType extends InlineTextPropsType{
	queries?: QueryType
}

const setStyle = ({
    color,
    size,
    weight,
    mb,
    align,
	tcase
}: Partial<InlineTextPropsType>) => {
	return `
		${ color		? `color:				${color};` 		: ``}
		${ size			? `font-size:			${size};` 				: ``}
		${ weight		? `font-weight:			${weight};` 			: ``}
		${ mb			? `margin-bottom:		${mb};` 				: ``}
		${ align		? `text-align:			${align};` 				: ``}
		${ tcase		? `text-transform:		${tcase};` 				: ``}
	`
}

export const TextWrapper = styled.p<TextPropsType>`
    line-height: 1.5;
	color: ${GV('color-secondary')};

	${({ queries, ...rest }: TextPropsType) => `
		${setStyle(rest)}
		${
			queries 
				? Object.keys(queries).reverse()?.map((breakpoint: string) => {
						return `@media (max-width: ${breakpoint}px) {
							${setStyle(queries[breakpoint])}
						}`;
					}).join('') 
				: ``
		}
	`}
`

export const SpanWrapper = styled(TextWrapper)`
    display: inline-block;
`
