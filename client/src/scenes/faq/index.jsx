import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import {useSelector} from "react-redux";

const FAQ = () => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const languageSelector= useSelector(state => state.isEnglish)

   return (
       <Box m="20px">
          <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

          <Accordion defaultExpanded>
             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                   How to see all payments by specific hotel ?
                </Typography>
             </AccordionSummary>
             <AccordionDetails>
                <Typography>
                   It's only available if you are an owner of that hotel. You can see all payments by going into favourites, and clicking the button with matching label.
                </Typography>
             </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                   Why can't I remove the hotel from my favourites ?
                </Typography>
             </AccordionSummary>
             <AccordionDetails>
                <Typography>
                   If you are an owner, it's impossible due to system architecture.
                </Typography>
             </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                   How can I edit info about my hotels?
                </Typography>
             </AccordionSummary>
             <AccordionDetails>
                <Typography>
                   Go to Favourite hotels.  Double click on the cell you want to edit, then press save button.
                </Typography>
             </AccordionDetails>
          </Accordion>
          {/*<Accordion defaultExpanded>*/}
          {/*   <AccordionSummary expandIcon={<ExpandMoreIcon />}>*/}
          {/*      <Typography color={colors.greenAccent[500]} variant="h5">*/}
          {/*         Tochno ?*/}
          {/*      </Typography>*/}
          {/*   </AccordionSummary>*/}
          {/*   <AccordionDetails>*/}
          {/*      <Typography>*/}
          {/*         Da*/}
          {/*      </Typography>*/}
          {/*   </AccordionDetails>*/}
          {/*</Accordion>*/}

          {/*<Accordion defaultExpanded>*/}
          {/*   <AccordionSummary expandIcon={<ExpandMoreIcon />}>*/}
          {/*      <Typography color={colors.greenAccent[500]} variant="h5">*/}
          {/*         Tochno Tochno ???*/}
          {/*      </Typography>*/}
          {/*   </AccordionSummary>*/}
          {/*   <AccordionDetails>*/}
          {/*      <Typography>*/}
          {/*         Da*/}
          {/*      </Typography>*/}
          {/*   </AccordionDetails>*/}
          {/*</Accordion>*/}
       </Box>
   );
};

export default FAQ;