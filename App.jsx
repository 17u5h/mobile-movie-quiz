import {StatusBar} from 'expo-status-bar';
import * as S from './styles'


export default function App() {
	return (
		<S.Container>
			<S.Title>Hello world</S.Title>
			<StatusBar style="auto"/>
		</S.Container>
	);
}

