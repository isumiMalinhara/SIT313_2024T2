from moviepy.editor import VideoFileClip, concatenate_videoclips

def merge_videos(video1_path, video2_path, output_path):
    # Load the video clips
    clip1 = VideoFileClip(video1_path)
    clip2 = VideoFileClip(video2_path)

    # Concatenate the video clips
    final_clip = concatenate_videoclips([clip1, clip2])

    # Write the result to a file
    final_clip.write_videofile(output_path, codec="libx264")

if __name__ == "__main__":
    video1_path = r"C:\Users\pasin\OneDrive\Documents\Isumi\SIT313 - Front End Development\8.1D\Recording 2024-09-16 144606.mp4"
    video2_path = r"C:\Users\pasin\OneDrive\Documents\Isumi\SIT313 - Front End Development\8.1D\Recording 2024-09-16 144744.mp4"
    output_path = r"C:\Users\pasin\OneDrive\Documents\Isumi\SIT313 - Front End Development\8.1D\merged_video.mp4"

    merge_videos(video1_path, video2_path, output_path)