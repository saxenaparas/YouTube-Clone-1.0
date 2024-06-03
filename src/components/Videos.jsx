import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return 'Loading...';

  return (
    <Stack
      direction={direction || "row" || direction}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => (  // Yaha par yae '()' braces use hoge, yae '{}' wale nahi. content display hi nahi hoga agar: (item, idx) => {//code} kar diya toh, show nahi hoga. So, (item, idx) => (//code) use karo;
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack >
  );
};

export default Videos;
