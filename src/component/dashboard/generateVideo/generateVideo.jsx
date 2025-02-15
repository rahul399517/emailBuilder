"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  CircularProgress,
  Grid,
  Container,
} from "@mui/material";
import { useRouter } from "next/navigation";

const predefinedPrompts = [
  "Epic battle in futuristic Tokyo",
  "A serene sunset over Mount Fuji",
  "Mystical forest with anime creatures",
];

export default function CreateVideoPage() {
  const [prompt, setPrompt] = useState("");
  const [additionalPrompt, setAdditionalPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [credits, setCredits] = useState(200);
  const [premiumOptions, setPremiumOptions] = useState({
    voiceover: false,
    customSoundtrack: false,
    specialEffects: false,
  });
  // Additional details for premium options
  const [voiceoverDetails, setVoiceoverDetails] = useState("");
  const [soundtrackDetails, setSoundtrackDetails] = useState("");
  const [effectsDetails, setEffectsDetails] = useState("");
  const router = useRouter();

  const handleGenerateVideo = () => {
    if (!prompt.trim()) return;

    // Calculate total cost for generating a video
    let cost = 50;
    if (premiumOptions.voiceover) cost += 20;
    if (premiumOptions.customSoundtrack) cost += 30;
    if (premiumOptions.specialEffects) cost += 40;

    if (credits < cost) {
      alert("Insufficient credits. Please buy more credits.");
      return;
    }

    setLoading(true);
    setCredits((prev) => prev - cost);

    // Simulate an API call to generate the video
    setTimeout(() => {
      setVideoUrl(
        "https://www.youtube.com/embed/CeItO4-ARfk?autoplay=1&mute=1&vq=hd720"
      );
      setLoading(false);
    }, 3000);
  };

  const handlePromptSelect = (selectedPrompt) => {
    setPrompt(selectedPrompt);
  };

  const togglePremiumOption = (option) => {
    setPremiumOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const handleDownloadVideo = () => {
    const downloadCost = 20;
    if (credits < downloadCost) {
      alert("Insufficient credits for download. Please buy more credits.");
      return;
    }
    setCredits((prev) => prev - downloadCost);
    // Replace with your actual download logic.
    alert("Video downloaded successfully!");
  };

  // Form content component
  const FormContent = () => (
    <>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} color="#333">
        Create Your AI-Generated Anime Video
      </Typography>
      <TextField
        fullWidth
        label="Enter your video prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Additional Prompt Details (optional)"
        value={additionalPrompt}
        onChange={(e) => setAdditionalPrompt(e.target.value)}
        variant="outlined"
        multiline
        rows={3}
        sx={{ mb: 2 }}
      />
      <Typography variant="body1" mb={1} color="#333">
        Or select from popular prompts:
      </Typography>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
        {predefinedPrompts.map((p, index) => (
          <Chip
            key={index}
            label={p}
            onClick={() => handlePromptSelect(p)}
            clickable
          />
        ))}
      </Box>
      <Typography variant="h6" fontWeight="bold" mb={1} color="#333">
        Enhance Your Video (Additional Cost)
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
        <Chip
          label="Voiceover (+20 credits)"
          color={premiumOptions.voiceover ? "primary" : "default"}
          onClick={() => togglePremiumOption("voiceover")}
          clickable
        />
        <Chip
          label="Custom Soundtrack (+30 credits)"
          color={premiumOptions.customSoundtrack ? "primary" : "default"}
          onClick={() => togglePremiumOption("customSoundtrack")}
          clickable
        />
        <Chip
          label="Special Effects (+40 credits)"
          color={premiumOptions.specialEffects ? "primary" : "default"}
          onClick={() => togglePremiumOption("specialEffects")}
          clickable
        />
      </Box>
      {premiumOptions.voiceover && (
        <TextField
          fullWidth
          label="Voiceover Script (Optional)"
          value={voiceoverDetails}
          onChange={(e) => setVoiceoverDetails(e.target.value)}
          variant="outlined"
          sx={{ mb: 2 }}
        />
      )}
      {premiumOptions.customSoundtrack && (
        <TextField
          fullWidth
          label="Custom Soundtrack Details (Optional)"
          value={soundtrackDetails}
          onChange={(e) => setSoundtrackDetails(e.target.value)}
          variant="outlined"
          sx={{ mb: 2 }}
        />
      )}
      {premiumOptions.specialEffects && (
        <TextField
          fullWidth
          label="Special Effects Description (Optional)"
          value={effectsDetails}
          onChange={(e) => setEffectsDetails(e.target.value)}
          variant="outlined"
          sx={{ mb: 2 }}
        />
      )}
      <Button
        variant="contained"
        fullWidth
        size="large"
        onClick={handleGenerateVideo}
        disabled={loading}
        sx={{
          mb: 4,
          backgroundColor: "#1a237e",
          "&:hover": { backgroundColor: "#0d47a1" },
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Generate Video"}
      </Button>
    </>
  );

  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff", p: { xs: 2, md: 4 } }}>
      {/* Header */}
      <Box
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" color="#333">
          Remaining Credits: {credits}
        </Typography>
        <Button
          variant="outlined"
          onClick={() => router.push("/buy-credits")}
          sx={{ borderColor: "#333", color: "#333" }}
        >
          Buy Credits
        </Button>
      </Box>
      <Container sx={{ py: 4, maxWidth: "1000px" }}>
        {videoUrl ? (
          <Grid container spacing={4}>
            {/* Left Column: Form */}
            <Grid item xs={12} md={6}>
              <FormContent />
            </Grid>
            {/* Right Column: Video Preview */}
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 2 }}>
                <Box sx={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                  <Box
                    component="iframe"
                    src={videoUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: 2,
                    }}
                  />
                </Box>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#ff9800",
                  "&:hover": { backgroundColor: "#e68900" },
                }}
                onClick={handleDownloadVideo}
                disabled={credits < 20}
              >
                Download Video (-20 Credits)
              </Button>
            </Grid>
          </Grid>
        ) : (
          // Full-width form when no video is generated
          <Box sx={{ maxWidth: "600px", mx: "auto" }}>
            <FormContent />
          </Box>
        )}
      </Container>
    </Box>
  );
}
