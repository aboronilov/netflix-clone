import { useState, useContext, createContext } from 'react';
import { createPortal } from 'react-dom';

import {
    Container,
    Button,
    Overlay,
    Inner
} from './styles/player'

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false);
    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return showPlayer ? createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...restProps}>
            <Inner>
                {/* <video id="netflix-player" controls autoPlay>
                    <source src={src} type="video/mp4" />
                </video> */}
                {/* <Close /> */}
                <div class="responsiveRapper">
                    <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/zAlX1V3lK5s">
                    </iframe>
                </div>
            </Inner>
        </Overlay>,
        document.body
    )
        : null;
}

Player.Button = function PlayerButton({ ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return (
        <Button onClick={() => setShowPlayer(showPlayer => !showPlayer)}>
            Play
        </Button>
    )
}