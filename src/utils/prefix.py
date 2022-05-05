import discord

from src.bot import Reki

def custom_prefix(bot: Reki, msg: discord.Message):
  user_id = bot.user.id
  base = [f'<@!{user_id}> ', f'<@{user_id}> ']
  
  if msg.guild is None:
    base.append('rk!')
    base.append('r$')
    
  return base